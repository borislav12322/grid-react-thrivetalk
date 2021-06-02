import s from './TextCards.module.scss';
import TextCard from "../textCard/TextCard";

function MenuNav() {
    return (
        <section className={s.textCards}>
            <div className={s.wrapper}>
                <TextCard
                    titleText='Nutritional Plans'
                    textValue='Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
                />
                <TextCard
                    titleText='Weight Loss'
                    textValue='Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
                />
                <TextCard
                    titleText='Mental Peace'
                    textValue='Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
                />
                <TextCard
                    titleText='Home Training'
                    textValue='Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
                />
                <TextCard
                    titleText='Work/Life Balance'
                    textValue='Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
                />
                <TextCard
                    titleText='Cardio'
                    textValue='Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
                />
            </div>
        </section>
    );
}

export default MenuNav;
