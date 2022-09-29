
import './createPost.css'

export default function createPost() {
  return (
    <main className='main'>
        <div className='create-post'>
            <h1>CREATE A POST</h1>
            <form >
                <label><span>Name</span><input name='name' type="text" required/></label>
                <label><span>E-mail</span><input name="email" type="email" required/></label>
                <label><span>Phone</span><input name="phone" type="text" required/></label>
                <label><span>Category</span><input name='tag' type="text"/></label>
                <label><span>Title</span><input name='title' type="text" required/></label>
                <label><span>Description</span> <textarea name='content'/></label>
                <label><span>Price</span><input name='price' type="number" required/> EUR</label>
                <label><span>Image</span><input name='image' type="file"/></label>
                <label><input type="checkbox" required /><span>Yes, I approve the management of personal data by MerrJep. The recorded data will be collected and processed only for the aforementioned purposes.</span></label>
                <label><input type="checkbox" required /><span>Yes, I agree to the terms and conditions of MerrJep.com. Read more details about Personal Data Processing Rights in the Privacy Policy section of the MerrJep.com website.</span></label>
                <button>Submit Post</button>
            </form>
        </div>
    </main> 
  )
}
