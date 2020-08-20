import React from 'react'
import { AnalysisTabWrapper, NERTablesContainer } from '../styles/dashboard-style'
import { Table } from 'antd'

class NERAnalysis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                person: [
                    "DaveWithAVeryLongNameHahahaha", "Billy", "Dame", "Steph"
                ],
                place: [
                    "Disney", "Legoland", "theatre", "arena"
                ],
                event: [
                    "elections", "party", "game", "cool_event"
                ],
                time: [
                    "today", "yesterday", "tomorrow", "now"
                ]
            }
        }
     }

     render() {
         const personDataSource = this.state.data.person.map( (name, idx) => {
             return {
                 key: idx,
                 person: name
             }
         })

        const placeDataSource = this.state.data.place.map((place, idx) => {
          return {
            key: idx,
            place,
          };
        });

        const eventDataSource = this.state.data.event.map((event, idx) => {
          return {
            key: idx,
            event,
          };
        });

        const timeDataSource = this.state.data.time.map((time, idx) => {
          return {
            key: idx,
            time,
          };
        });

         const columns = { 
             person: [{
                title: "Person",
                dataIndex: "person",
                key: "person"
            }],
            place: [{
                title: "Place",
                dataIndex: "place",
                key: "place"
            }],
            event: [{
                title: "Event",
                dataIndex: "event",
                key: "event"
            }],
            time: [{
                title: "Time",
                dataIndex: "time",
                key: "time"
            }]
        }

         return (
           <AnalysisTabWrapper>
             <NERTablesContainer>
               <Table dataSource={personDataSource} columns={columns.person} />
               <Table dataSource={placeDataSource} columns={columns.place} />
               <Table dataSource={eventDataSource} columns={columns.event} />
               <Table dataSource={timeDataSource} columns={columns.time} />
             </NERTablesContainer>
           </AnalysisTabWrapper>
         );
     }
}

export default NERAnalysis