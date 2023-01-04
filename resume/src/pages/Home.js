import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import template1img from '../resources/templates/template1.png'
import template2img from '../resources/templates/template2.png'
import template3img from '../resources/templates/template3.png'
import '../resources/templates.css'
import { useNavigate } from 'react-router'
function Home() {
  const navigate= useNavigate()
  const templates = [
    {
      title: 'Sample 1',
      image: template1img,
    },
    {
      title: 'Sample 2',
      image: template2img,
    },
    {
      title: 'Sample 3',
      image: template3img,
    },
  ];
  return (
    <DefaultLayout>
      <div className="row home">
        {templates.map((template , index) => {
          return <div className="col-md-4">
            <div className='template'>
            <img src={template.image} height='300' alt="" style={{width:'100%'}}/>
            <div className='text'>
            <p>{template.title}</p>
            <button onClick={()=>navigate(`/templates/${index+1}`)}>TRY</button>
            </div>
            </div>
          </div>;
        })}
      </div>
    </DefaultLayout>
  );
}
export default Home;