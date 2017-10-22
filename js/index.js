var concept_key = "health"; // default concept

var basic = new Datamap({
  element: document.getElementById("basic"),
  scope: 'world',
  projection: 'mercator',
  height: 500,
  fills: {
          defaultFill: '#D3D3D3',
          moody_blue: '0267C1',
          green: '009FB7',
          yellow: 'F0CF65',
          red: 'bd4f6c',
          orange: 'ff8484'     
        }, 
  geographyConfig: {
    popupOnHover: false,
    highlightOnHover: false
  }
});

basic.bubbles( myData , {
  popupTemplate: function(geo, data) {
    return "<div class='hoverinfo'>Language Name: " + data.language_name + "</br>" + concept_key + " is: " + "<strong>" + data.concept[concept_key] + "</strong>"+ "</div>";
  }
});

basic.arc([
  {
    origin: {
      latitude: 20.1,
      longitude: -97.56
    },
    destination: {
      latitude: 46.90,
      longitude: 19.66
    }
  },
  {
    origin: {
      latitude: 63.75,
      longitude: 87.54
    },
    destination: {
      latitude: -25.92,
      longitude: 22.72
    }
  }
], {strokeWidth: 1.5});


function changeConcept(concept) {
  concept_key = concept;
  basic.bubbles( myData, {
    popupTemplate: function(geo, data) {
      return "<div class='hoverinfo'>Language Name: " + data.language_name + "</br>" + concept_key + " is: " + "<strong>" + data.concept[concept_key] + "</strong>"+ "</div>";
    }
  });
}



var heybubbles = [  
  {lat: -23.42, lng: 39.11},
  {lat: 23.5, lng: 125.43}
];


basic.addPlugin('bigBubble', function( layer, data ) {
  var self = this;
  var className = 'bigBubbles';

  var cuteBubbles = layer.selectAll(className)
                     .data( data, JSON.stringify);

  var elemEnter = cuteBubbles.enter();


    elemEnter
      .append('circle')
      .attr('class', className)
      .attr('cx', function( datum ) {
        return self.latLngToXY( datum.lat, datum.lng)[0];
      })
      .attr('cy', function( datum ) {
        return self.latLngToXY( datum.lat, datum.lng)[1];
      })
      .attr('r', 100)
      .style('fill', 'white');


    elemEnter
      .append('text')
      .attr('dx', function( datum ) {
        return self.latLngToXY( datum.lat, datum.lng)[0];
      })
      .attr('dy', function( datum ) {
        return self.latLngToXY( datum.lat, datum.lng)[1];
      })
      .text("ssssssssssssssss")
      





});

basic.bigBubble(heybubbles); 








