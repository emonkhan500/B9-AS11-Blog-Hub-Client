import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ShowWishList = ({blog}) => {
    const {
        image ,_id,time,title,category,
        description,
        longdescription}=blog

        const handleDelete = _id =>{
            console.log(_id)
            
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            
            
              }).then((result) => {
              if (result.isConfirmed) {
                 fetch(`http://localhost:5000/wishlist/${_id}`,{
                  method:'DELETE'
                 })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
            
                  if (data.deletedCount > 0) {
                    Swal.fire(
                    'Deleted!',
                    'Your spot has been deleted.',
                    'success'
                    )
                   window.location.reload()
                  }
                });
              }
              });
            }

    return (
        <div className="backdrop-blur-lg rounded-lg shadow-xl">
        <div className="card h-full bg-white">
            <figure className="rounded-t-xl">
                <img src={image} alt="Shoes" className="w-full h-56 object-cover" />
            </figure>
            <div className="card-body relative items-center text-start bg-gradient-to-bl from-orange-100 via-yellow-100 to-yellow-400 backdrop-blur rounded-b-xl">
                <p className="absolute font-mplus font-medium text-lg bg-green-400 p-2 rounded-md -top-5 right-5 text-white">{category}</p>
                <h2 className="card-title text-start w-full">{title}</h2>
                <p className=''>{description}</p>
                <div className="card-actions w-full flex justify-between mt-6 items-center">
                   <Link to={`/details/${_id}`}> <button className='btn btn-accent'>View Details</button></Link>
                   <button onClick={()=>handleDelete(blog._id)} className='btn btn-warning'>Remove </button>
                </div>
                
                    
                
            </div>
        </div>
    </div>
    );
};

export default ShowWishList;