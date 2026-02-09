
type ActivityProps = {
    activities: string[];
   };
   function ActivityList({ activities }: ActivityProps) {
    return <li>{activities}</li> 
    
   
   }
   export default ActivityList;