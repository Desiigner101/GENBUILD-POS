import { useContext, useState } from "react";
import {AppContext} from "../../context/AppContext.jsx"
import toast from "react-hot-toast";
import{addItem} from "../../Service/ItemService.js"
import {assets} from "../../assets/assets.js"

const ItemForm = () => {
    const {categories, itemsData, setItemsData} = useContext(AppContext);

    const [image, setImage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState( {
        name: "",
        description: "",
        price: "",
        categoryId: "",
    });

    const onChangeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setData((data) => ({...data, [name]: value}));
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        formData.append("item", JSON.stringify(data));
        formData.append("file", image);
        try{
            if(!image){
                toast.error("Select Image")
                return;
            }

            const response = await addItem(formData);
            if(response.status === 201){
                setItemsData([...itemsData, response.data])
                //TODO: update the category state
                toast.success("Item Added")
                setData({
                    name: "",
                    description: "",
                    price: "",
                    categoryId: "",
                })
                setImage(false);
            }else{
                toast.error("Unable to add item")
            }
        }catch(e){
            console.log(e);
            toast.error("Unable to add item.")
        }finally{
            setLoading(false);
        }
    }

    return (
        <div className="item-form-container text-light" style={{height: '100vh', overflowY: 'auto', overflowX: 'hidden'}}>
            <div className="mx-2 mt-2">
                <div className="row">
                    <div className="card col-md-8 form-container">
                        <div className="card-body">
                            <form onSubmit={onSubmitHandler}>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">
                                        <img src={image ? URL.createObjectURL(image) : assets.upload} alt="" width={48}/>
                                    </label>
                                    <input 
                                    type="file" 
                                    name="image" 
                                    id="image" 
                                    className="form-control" 
                                    hidden 
                                    onChange={(e) => setImage(e.target.files[0])}/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Item Name</label>
                                    <input 
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="form-control"
                                    placeholder="Item Name"
                                    onChange={onChangeHandler}
                                    value={data.name}/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="category" className="form-label">
                                        Category
                                    </label>

                                    <select name="categoryId" id="category" className="form-control" onChange={onChangeHandler} value={data.categoryId}>
                                        <option value="">--SELECT CATEGORY--</option>
                                        {categories.map((category, index) => (
                                            <option key={index} value={category.categoryId}>{category.name}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label">Price</label>
                                    <input 
                                    type="number"
                                    name="price"
                                    id="price"
                                    className="form-control"
                                    placeholder="&#8369; 1000.00"
                                    onChange={onChangeHandler}
                                    value={data.price}/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Description</label>
                                    <textarea 
                                    rows="5"
                                    name="description"
                                    id="description"
                                    className="form-control"
                                    placeholder="Write Content Here..."
                                    onChange={onChangeHandler}
                                    value={data.description}></textarea>
                                </div>

                                <button 
                                type="submit" 
                                className="btn btn-warning w-100" disabled = {loading}>
                                    {loading ? "Loading..." : "Save"}
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemForm;