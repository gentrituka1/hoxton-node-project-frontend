import React from 'react'

export default function createPost() {
  return (
    <div className='create-post'>
        <h1>CREATE A POST</h1>
        <form >
            <label>Name <input name='name' type="text" required/></label>
            <label>E-mail <input name="email" type="email" required/></label>
            <label>Phone <input name="phone" type="text" required/></label>
            <label>Category <input name='tag' type="text"/></label>
            <label>Title <input name='title' type="text" required/></label>
            <label>Description <textarea name='content'/></label>
            <label>Price <input name='price' type="number" required/> EUR</label>
            <label>Image <input name='image' type="file"/></label>
            <input type="checkbox" required>Yes, I approve the management of personal data by MerrJep. The recorded data will be collected and processed only for the aforementioned purposes.</input>
            <input type="checkbox" required>Yes, I agree to the terms and conditions of MerrJep.com. Read more details about Personal Data Processing Rights in the Privacy Policy section of the MerrJep.com website.</input>
            <button>Submit Post</button>
        </form>
    </div>
    
  )
}
