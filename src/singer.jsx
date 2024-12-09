export default function Singer({ singer }) {
    console.log(Singer);
    return (
        <div>
            <h3>Singer: {singer.name}</h3>
            <h4>Age: {singer.age}</h4>
        </div>
    );
}
