import s from './SmallCards.module.scss';
import Card from "../card/Card";
function About(props) {
    return (
        <section className={s.smallCards}>
            <div className={s.wrapper}>
                <Card cardText='Weight Lifting'
                    textClass={s.textSmall}
                    styleWrapper={{
                        backgroundColor: '#FFE2DE',
                        
                    }}

                />
                <Card cardText='Running & Spinning'
                    textClass={s.textSmall}
                    styleWrapper={{
                        backgroundColor: '#C4E769',
                    }}
                    styleText={{
                        width: '230px',
                    }}
                />
                <Card textClass={s.textSmall}
                    cardText='Pumping Iron'
                    styleWrapper={{
                        backgroundColor: '#62D0DF',
                    }}

                />
                <Card cardText='Pumping Iron'
                    textClass={s.textSmall}
                    styleWrapper={{
                        backgroundColor: '#0052C1',
                    }}
                />
            </div>
        </section>
    );
}

export default About;
