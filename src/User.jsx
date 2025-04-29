import CustomButton from "./shared/CustomButton";

function User(props){

console.log(props);

return (

    <div className = "user">
        <h2>user name is {props.name}</h2>
        <p>email : {props.email}</p>
        <CustomButton text = "Details" type="secondary" />
        <CustomButton  text =" Delete" type="danger" />

    </div>
);

}

export default User;