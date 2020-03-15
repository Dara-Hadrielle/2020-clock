import React from 'react'

class WorldClock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        local: props.local ? props.local : "America/Fortaleza",
        date: null
      };
    }
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        2000
      );
    }
  
    tick() {
      let {local} = this.state;
      let url = "https://http://worldtimeapi.org/api/timezone/" + local;
      fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result.datetiime);
          this.setState({
            isLoaded: true,
            date: result.datetiime      
          });
        },
        // Nota: É importante lidar com os erros aqui
        // em vez de um bloco catch() para não recebermos
        // exceções de erros dos componentes.
        (error) => {
          this.setState({
            isLoaded: false,
            date: null,
            error
          });
        }
      )
    }
  
    render() {
      let {date, isLoaded, error, local} = this.state;
      if (error){
        return(
          <div>
              <h2>World clock :/ ({error.message})</h2>
          </div>
        )
      } else if (!isLoaded){
          return(
            <div>
                <h2>World clock is starting...</h2>
            </div>
          );
      } else {
          return (
            <div>
                <h2> {local ? local : "World clock"} is {date}.</h2>
            </div>
      );
      } 
    }
  }

  export default WorldClock;