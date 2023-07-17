import 'bootstrap/dist/css/bootstrap.min.css';

export default function DeleteButton({ onDelete }) {
    return <button className='btn btn-danger'
    onClick={onDelete}>Delete</button>;
}