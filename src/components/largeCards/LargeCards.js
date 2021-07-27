import s from './LargeCards.module.scss';
import Card from "../card/Card";
import SmoothieBackground from '../../assets/img/smothieBackground.jpeg';



function LargeCards(props) {
    return (
        <section className={s.largeCards}>
            <div className={s.wrapper}>
            <Card cardText='Physical Health'
                  ClassName = {s.customizeCard}
                  styleWrapper={{ width: '100%', backgroundColor: '#22356F', }}
                  styleText={{marginTop: '126px',
                      marginLeft: '104px', width: '157px'}}
                  textClass={s.textCustomize}/>
            <Card cardText='Mental Health'
                  ClassName = {s.customizeCard}
                  styleWrapper={{ width: '100%', backgroundColor: '#0052C1',  }}
                  styleText={{marginTop: '126px',
                      marginLeft: '104px', width: '157px'}}
                  textClass={s.textCustomize}
            />
            <Card cardText='Nutrition'
                  ClassName = {s.customizeCard}
                  styleWrapper={{
                      width: '100%',
                      backgroundImage: `url(${SmoothieBackground})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPositon: 'center',
                      backgroundSize: 'cover',
                  }}
                  styleText={{marginTop: '126px',
                      marginLeft: '104px'}}
                  textClass={s.textCustomize}/>
            <Card cardText='Gymnastics'
                  ClassName = {s.customizeCard}
                  styleWrapper={{
                      width: '100%',
                      backgroundColor: '#62D0DF',
                  }}
                  styleText={{marginTop: '126px',
                      marginLeft: '104px'}}
                  textClass={s.textCustomize}/>
            <Card cardText='Crossfit'
                  ClassName = {s.customizeCard}
                  styleWrapper={{
                      width: '100%',
                      backgroundColor: '#DEE1FF',
                  }}
                  styleText={{marginTop: '126px',
                      marginLeft: '104px'}}
                  textClass={s.textCustomize}/>
            <Card cardText='Aerobics'
                  ClassName = {s.customizeCard}
                  styleWrapper={{
                      width: '100%',
                      backgroundColor: '#8F00FF',
                  }}
                  styleText={{marginTop: '126px',
                      marginLeft: '104px'}}
                  textClass={s.textCustomize}/>
            </div>
        </section>
    );
}

export default LargeCards;
