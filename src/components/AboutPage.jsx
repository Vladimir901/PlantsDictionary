import { Layout } from 'antd'
import image from './images/bg1.jpg'
import React from 'react'
import { Link } from 'react-router-dom'
import Title from 'antd/es/typography/Title'
import pl1 from './images/1.png'
import logo from './images/logo-white.png'

function AboutPage() {
    return (
        <div>
           
            <Layout style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection:'row',
                backgroundImage: `url(${image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding:'6%'
            }}>               
                 <Layout style={{backgroundColor:"white", borderRadius:'30px', padding: '3%', width: '60%'}}>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                    <Title level={2}>О нас</Title>
                    <Link to={'/'} style={{ color: 'black', textDecoration: 'underline' }}><h2>На главную</h2></Link>
                    </div>
                    <br/>
                    <Title level={5}>Команда Ikanam представляет сервис поиска и хранения агрегированной информации о лекарственных растениях на территории Российской Федерации.
Наш сервис позволяет быстро находить необходимую информацию о травах по какому-либо признаку, например по:
- Ареалу их произрастания, в том числе по регионам РФ;
- Долготе дня и количеству солнечных дней по региону;
- Нахождению вида в Красной книге и Государственной фармакопее;
- Типу почвы, периоду посева и количество собранного урожая;
Помимо этого, сервис позволяет расширять/сокращать списки лекарственных культур, составлять описательную статистику, использовать региональную информацию для построения визуализации.</Title>
<Title level={5}>
Технические особенности:
Python, OCR(pytesseract, pypdf2, pdf2image), suntime, NLP, Transformers, PostgreSQL, Django</Title>
<Title level={5}>
Уникальность нашего решения заключается в использовании целостной расширяемой архитектуры с продвинутыми ИИ-методами получения информации из PDF-файлов и последующей обработки большими языковыми моделями для вычленения наиболее релевантной информации по необходимым характеристикам.</Title>
                    <Title level={5}>Почта для связи: rinat.sharafetdinov42@gmail.com</Title>
                    {/* <Link to={'/'} style={{color:'black', textDecoration:'underline'}}>Вернуться на главную</Link> */}
                </Layout>
            <div style={{marginLeft:'4%', textAlign:'center'}}>
                <Title level={2} style={{color:'white'}}>IKANAM</Title>
                <img src={logo} width={400}></img>
            </div>
                
            </Layout>
            {/* <img src={'https://i.pinimg.com/564x/05/26/45/052645488d43e0a883bbbc90a78f5db1.jpg'} alt="BigCo Inc. logo" width={100} style={{position:'absolute', bottom:0,right:0, mixBlendMode:'multiply'}}></img>
        <img src={pl1} width={100} style={{position:'absolute', bottom:0, left:0, mixBlendMode:'multiply'}}></img> */}
        
        </div>
    )
}

export default AboutPage