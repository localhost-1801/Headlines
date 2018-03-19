import React, { Component } from 'react';
import { VictoryBar, VictoryStack, VictoryAxis, VictoryLabel } from 'victory';

// https://formidable.com/open-source/victory/gallery/stacked-bars-central-axis/

export default class BarChart extends Component {
    constructor() {
      super();
      this.state = {
        dataA: [
          { x: "Anger", y: 27 },
          { x: "Disgust", y: 40 },
          { x: "Fear", y: 38 },
          { x: "Joy", y: 37 },
          { x: "Sadness", y: 25 },
          { x: "Emotion Tone", y: 19 },
          { x: "Openness", y: 15 },
          { x: "Conscientousness", y: 13 },
          { x: "Extraversion", y: 12 },
          { x: "Agreeableness", y: 15 },
          { x: "Emotional Range", y: 13 }
        ],
        dataB: [
          { x: "Anger", y: 30 },
          { x: "Disgust", y: 4 },
          { x: "Fear", y: 22 },
          { x: "Joy", y: 43 },
          { x: "Sadness", y: 12 },
          { x: "Emotion Tone", y: 44 },
          { x: "Openness", y: 35 },
          { x: "Conscientousness", y: 23 },
          { x: "Extraversion", y: 2 },
          { x: "Agreeableness", y: 40 },
          { x: "Emotional Range", y: 25 }
        ]
      };
    }

  render(){
    return(
      <div>
      <h3>Comparative Emotional Analysis</h3>
      <svg viewBox={`0 0 500 500`}
        style={{ width: "50%", height: "50%" }}
      >
        <VictoryStack horizontal
          standalone={false}
          /* setting a symmetric domain makes it much easier to center the axis  */
          domain={{ x: [-60, 60] }}
          padding={{ top: 10, bottom: 80, left: 20, right: 20 }}
          height={500}
          width={500}
          style={{ data: { width: 20 }, labels: { fontSize: 11 } }}
        >
          <VictoryBar
            style={{ data: { fill: "tomato" } }}
            data={this.state.dataA}
            y={(data) => (-Math.abs(data.y))} // tomato numbers
            labels={(data) => (`${data.x}: ${Math.abs(data.y)}%`)} // number label
          />
          <VictoryBar
            style={{ data: { fill: "orange" } }}
            data={this.state.dataB}
            labels={(data) => (`${Math.abs(data.y)}%`)} // number
          />
        </VictoryStack>
        <VictoryAxis dependentAxis
        height={500}
        width={500}
        padding={{ top: 10, bottom: 80, left: 20, right: 20 }}
        style={{
          axis: { stroke: "transparent" },
          ticks: { stroke: "transparent" },
          tickLabels: { fontSize: 11, fill: "black" }
        }}
        /*
          Use a custom tickLabelComponent with
          an absolutely positioned x value to position
          your tick labels in the center of the chart. The correct
          y values are still provided by VictoryAxis for each tick
        */
        tickLabelComponent={<VictoryLabel x={250} textAnchor="middle" />}
        tickValues={this.state.dataA.map((point) => point.x).reverse()}
      />
      </svg>
      </div>
    );
  }
}