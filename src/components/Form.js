import React,{useState} from "react";

export const Form = (props = {}) => {

    const [data,setData] = useState({
        title:'',
        description:'',
        todos:[]
    });

    const handlerChangeTitle = (event) => {
        const value = event.target.value;
        setData({...data, title:value});
    };

    const handlerChangeDescription = (event) => {
        const value = event.target.value;
        debugger;
        setData({...data,description:value});
    };

    const handlerOnSubmit = (event) => {
        event.preventDefault();
        //const {title,description,todos} = data;
        
        //const note = [{title,description}];
        //const newTodos = [...todos,note];
        //console.log(newTodos);
        //setData({'todos':newTodos})
    }


  return (
    <form onSubmit={handlerOnSubmit}>
      <div className="row">
        <div className="input-field col s12">
          <input id="title" type="text" className="validate" value={data.title} onChange={handlerChangeTitle} />
          <label htmlFor="title">Title - {data.title}</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <textarea
            id="description"
            className="materialize-textarea"
           
            value={data.description}
            onChange={handlerChangeDescription}
          ></textarea>
          <label htmlFor="description">Description</label>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
            <button type="submit"> Guardar</button>
        </div>
      </div>
    </form>
  );
};
