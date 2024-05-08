/* eslint-disable react/prop-types */

function TodoListItem({item , deleteData, PostDataStatus}) {


  return (
    <div className="flex-grow ">
      <div className="flex justify-between gap-3">
        <div className="flex flex-grow">
          <input  checked={item.status} onChange={()=>PostDataStatus(item.id,  !item.status,  item.title)}  type="checkbox" className=" bg-gray-700 mr-2" />
          <p className={` flex-grow text-white`} >{item?.title}</p>
        </div>
        <button onClick={()=>deleteData(item.id)} className="text-white">X</button>
      </div>
    </div>
  );
}
// ${item.status? "line-through":""} 
export default TodoListItem;
