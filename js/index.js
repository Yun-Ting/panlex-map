var concept_key = "health"; // default concept

// use Datamap library to generate a instance
var basic = new Datamap({
  element: document.getElementById("basic"),
  scope: 'world',
  projection: 'mercator',
  height: 500,
  fills: { defaultFill: '#D3D3D3'}, 
  geographyConfig: { 
    // turn off distracting interactions of maps
    popupOnHover: false,
    highlightOnHover: false
  }
});

// change concept on clicks
function changeConcept(concept) {
  concept_key = concept;
  basic.bigBubble(myData);
  // basic.bubbles( myData, {
  //   popupTemplate: function(geo, data) {
  //     return "<div class='hoverinfo'>Language Name: " + data.language_name + "</br>" + concept_key + " is: " + "<strong>" + data.concept[concept_key] + "</strong>"+ "</div>";
  //   }
  // });
}

// draw arcs
var num_of_languages = 16;
var output_arc_list = [];
for (var i = 0; i < num_of_languages - 5; ++i) {
  output_arc_list.push(
  {
    origin: {
      latitude: myData[i]['latitude'],
      longitude: myData[i]['longitude']
    },
    destination: {
      latitude: myData[i+5]['latitude'],
      longitude: myData[i+5]['longitude']
    }
  }
  );
}

basic.arc(
  output_arc_list, {strokeWidth: 1, arcSharpness: 1, animationSpeed: 800});

/**
 * create customized circles with plugin
 * You can find the documentation here:
 * https://web.archive.org/web/20150625160051/http://datamaps.markmarkoh.com/creating-a-datamaps-plugin/
 */

basic.addPlugin('bigBubble', function( layer, data ) { 
  // the new layer will be placed on top of the existing map
  // layer is the g(svg group element) of bigBubble (the # of languages)
  
  // hold this in a closure
  var self = this;

  // remove the previous layer 
  layer.selectAll("circle").remove();
  layer.selectAll("text").remove();

  // a class you'll add to the DOM elements
  var className = 'bigBubbles';

  // make a d3 selection
  var cuteBubbles = layer
                     .selectAll(className)
                     // bind the passed in data with className, joined-by-index
                     .data( data, JSON.stringify) // convert a Javascript object to a JSON string 
                     .attr('r', 15); 
                                  
  // console.log("cuteBubbles: " + cuteBubbles.size() + ", enter: " + cuteBubbles.enter().size() + ", exit: " + cuteBubbles.exit().size());
  
  // enter() create new nodes for incoming data and remove outgoing nodes that are no longer needed
  var elemEnter = cuteBubbles.enter();

  elemEnter
    .append('circle')
    .attr('class', className)
    .attr('cx', function(datum) {
      return self.latLngToXY(datum.latitude, datum.longitude)[0];
    })
    .attr('cy', function(datum) {
      return self.latLngToXY(datum.latitude, datum.longitude)[1];
    })
    .attr('r', function(datum) {
      return datum.radius;
    })
    .style('fill', function(datum) {
      return datum.fillKey;
    });

  elemEnter
    .append('text')
    .attr('dx', function(datum) {
      return self.latLngToXY(datum.latitude, datum.longitude)[0] + 10;
    })
    .attr('dy', function(datum) {
      return self.latLngToXY(datum.latitude, datum.longitude)[1] + 5;
    })
    .text(function(datum) {
      return datum.language_name;
    });

  elemEnter
    .append('text')
    .attr('dx', function(datum) {
      return self.latLngToXY(datum.latitude, datum.longitude)[0] + 10;
    })
    .attr('dy', function(datum) {
      return self.latLngToXY(datum.latitude, datum.longitude)[1] + 20;
    })
    .text(function(datum) {
      return datum.concept[concept_key];
    });
});

basic.bigBubble(myData); 

