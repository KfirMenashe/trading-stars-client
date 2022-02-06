import { formatDistance } from 'date-fns';
import React, { Component } from 'react';


interface DistanceFromNowProps {
    date:Date;
}
interface DistanceFromNowState {
    distanceToNow:string;
}

export default class distanceFromNow extends Component<DistanceFromNowProps,DistanceFromNowState> {

    timer: NodeJS.Timeout | undefined;
    
    constructor(props:DistanceFromNowProps) {
        super(props);
        this.state = {
            distanceToNow: this.formatDistanceToNow()
        };
      }

    private formatDistanceToNow = () => formatDistance(this.props.date, new Date(), {
        addSuffix: true,
        includeSeconds: true
    });
    
  render() {
    return <div>{this.state.distanceToNow}</div>;
  }

  componentDidMount(){
      if (this.timer)
        clearInterval(this.timer);
      
    this.timer = setInterval(() => {
        this.setState({distanceToNow:this.formatDistanceToNow()});
    },1000); 
  }
  componentWillUnmount(){
      if (this.timer)
        clearInterval(this.timer);
  }
}




// import { formatDistance } from 'date-fns';
// import React from 'react';

// export default function DistanceToNow({ date }: { date: Date }): JSX.Element {

    
//     const [distanceToNow, setDistanceToNow] = React.useState('');
//     const formatDistanceToNow = () => formatDistance(date, new Date(), {
//         addSuffix: true,
//         includeSeconds: true
//     });

    
//     const timer = setInterval(() => {
//         setDistanceToNow(formatDistanceToNow());
//         console.log(1);
//     },1000);

//     return (
//         <div>{distanceToNow}</div>
//     );

// }
