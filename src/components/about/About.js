import s from './About.module.scss';
function About() {
    return (
        <div className={s.about} >
            <div className={s.content}>
            <h2 className={s.title}>ABOUT US</h2>
            <p className={s.text}>We want to help you thrive! Whether you are just looking for someone to talk to, or are struggling with a mental wellness issue we’re here to help. Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.</p>
            </div>
            <div className={s.bottom}>
                <a href="" className={s.link}>WE CAN HELP YOU WITH</a>
            </div>
        </div>
    );
}

export default About;
