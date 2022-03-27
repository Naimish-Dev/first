import classes from "./meetupDetail.module.css"


const meetupDetail=(props)=>{
return(<>
<section className={classes.detail}>

    <img   src={props.image} 
           alt={props.title}/>

           <h1>{props.title}</h1>
           <address>{props.address}</address>
           <p>{props.discription}</p>
</section>

</>
)
}

export default meetupDetail;