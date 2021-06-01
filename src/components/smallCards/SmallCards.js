import s from './SmallCards.module.scss';
import Card from "../card/Card";
function About() {
    return (
        <section className={s.smallCards}>
            <div className={s.wrapper}>
            <Card cardText='Weight Lifting'
                  styleWrapper={{
                      // gridArea: '4/1/5/2',
                      backgroundColor: '#FFE2DE',
                      // padding: '95px 0px 0px 78px',
                      // flex: '0 1 25%'
                  }}
                  styleText={{marginTop: '95px',
                  marginLeft: '78px'}}
            />
            <Card cardText='Running & Spinning'
                  styleWrapper={{
                      // gridArea: '4/2/5/5',
                      backgroundColor: '#C4E769',
                      // padding: '95px 68px 211px 78px',
                      // flex: '0 1 25%'
                  }}
                  styleText={{marginTop: '95px',
                      marginLeft: '78px',
                  width:'230px'}}
            />
            <Card cardText='Pumping Iron'
                  styleWrapper={{
                      // gridArea: '4/5/5/8',
                      backgroundColor: '#62D0DF',
                      // padding: '95px 68px 211px 78px',
                      // flex: '0 1 25%'
                  }}
                  styleText={{marginTop: '95px',
                      marginLeft: '78px'}}
            />
            <Card cardText='Pumping Iron'
                  styleWrapper={{
                      // gridArea: '4/8/5/9',
                      backgroundColor: '#0052C1',
                      // padding: '95px 68px 211px 78px',
                      // flex: '0 1 25%'
                  }}
                  styleText={{marginTop: '95px',
                      marginLeft: '78px'}}
            />
            </div>
        </section>
    );
}

export default About;
