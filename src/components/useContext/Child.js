import { useContext } from 'react';
import { MyContext } from './MyContext';

function Child() {
  const { text, setText ,data} = useContext(MyContext);
//   console.log(typeof(text))
  console.log(data);
  const list = data.map((item) => (
    <li key={item.id}>
        <h4>{item.id}</h4>  
        
      <p>{text=='posts'?item.title:item.name}</p>
    </li>
  ));
  

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText('posts')}>
        Fetch Posts
      </button>
      <button onClick={() => setText('comments')}>
        Fetch comments
      </button>
      <button onClick={() => setText('users')}>
        Fetch Users
      </button>

<ul>
    {list}
</ul>


    </div>
  );
}

export default Child;