import pl1 from './images/1.png'
import data from './dbs/data2'
import React, { useEffect, useState } from 'react'
import image from './images/bg1.jpg'
import { Link } from 'react-router-dom'
import { Button, Input, Layout} from 'antd'
import Title from 'antd/es/typography/Title'

function CreatePlantPage() {
    const [plants, setPlants] = useState([])
    const [name, setName] = useState('')
    const [areal, setAreal] = useState('')
    const [regions, setRegions] = useState('')
    const [pochvs, setPochvs] = useState('')
    const [pharmacop, setPharmacop] = useState('')
    const [redbook, setRedbook] = useState('')
    const [sowing, setSowing] = useState('')
    const [req, setReq] = useState('')
    const [collect, setCollect] = useState('')
    const [him_sostav, setHim_sostav] = useState('')
    const [med_list, setMed_list] = useState('')

    const [arr, setArr] = useState([])
    const onSubmit = ()=> {
        const obj = {
            name:name,
            areal:areal,
            regions:regions,
            pochvs:pochvs,
            pharmacop:pharmacop,
            redbook:redbook,
            sowing:sowing,
            req:req,
            collect:collect,
            him_sostav:him_sostav,
            med_list:med_list
        }
        // plants.push(obj)
        if(obj.name!="")
        if(arr!=null){
        // console.log(JSON.parse(localStorage.getItem('plants')))
        console.log(arr)
        arr.push(obj)
        localStorage.setItem("plants", JSON.stringify(arr))
        }
        else 
        localStorage.setItem("plants", JSON.stringify(obj))
        setName("")
        setAreal("")
        setRegions("")
        setPochvs("")
        setPharmacop("")
        setRedbook("")
        setSowing("")
        setReq("")
        setCollect("")
        setHim_sostav("")
        setMed_list("")
    }
    useEffect(()=>{
        setPlants(data)
    },[])
    return (
        <Layout style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{textAlign:'center'}}>
                <Title level={1}>Добавить новое растение</Title>
            </div>
            <div style={{backgroundColor:'white', padding:'2%', borderRadius:'20px', height:'60vh', overflowY:'scroll'}}>
                <Title level={5}>Название растения</Title>
                <Input value={name} onChange={(e)=> setName(e.target.value)}/>
                <Title level={5}>Ареал</Title>
                <Input value={areal} onChange={(e)=> setAreal(e.target.value)}/>
                <Title level={5}>Регионы</Title>
                <Input value={regions} onChange={(e)=> setRegions(e.target.value)}/>
                <Title level={5}>Почва</Title>
                <Input value={pochvs} onChange={(e)=> setPochvs(e.target.value)}/>
                <Title level={5}>Входит ли в Фармакопею</Title>
                <Input value={pharmacop} onChange={(e)=> setPharmacop(e.target.value)}/>
                <Title level={5}>Входит ли в красную книгу</Title>
                <Input value={redbook} onChange={(e)=> setRedbook(e.target.value)}/>
                <Title level={5}>Ежегодная потребность</Title>
                <Input value={req} onChange={(e)=> setReq(e.target.value)}/>
                <Title level={5}>Когда сеять</Title>
                <Input value={sowing} onChange={(e)=> setSowing(e.target.value)}/>
                <Title level={5}>Когда собирать</Title>
                <Input value={collect} onChange={(e)=> setCollect(e.target.value)}/>
                <Title level={5}>Xимический состав</Title>
                <Input value={him_sostav} onChange={(e)=> setHim_sostav(e.target.value)}/>
                <Title level={5}>В каких препаратах используется</Title>
                <Input value={med_list} onChange={(e)=> setMed_list(e.target.value)}/>
                <Button style={{marginTop:'4%', marginBottom:'2%', background:'#61B97E'}} type='primary' onClick={onSubmit}>Добавить</Button>
                </div>
                <Link to={'/results'} style={{ color: 'white', textDecoration: 'underline' }}><h2>Вернуться к поиску</h2></Link>
                {/* <img src={'https://i.pinimg.com/564x/05/26/45/052645488d43e0a883bbbc90a78f5db1.jpg'} alt="BigCo Inc. logo" width={100} style={{position:'absolute', bottom:0,right:0, mixBlendMode:'multiply'}}></img>
        <img src={pl1} width={100} style={{position:'absolute', bottom:0, left:0, mixBlendMode:'multiply'}}></img> */}
        </Layout>


    )
}

export default CreatePlantPage