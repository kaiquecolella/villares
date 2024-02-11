import './ContactForm.scss';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("mqkrezvb");

    if (state.succeeded) {
        return <p className='text-center'>Obrigado por entrar em contato!</p>;
    }

    return (
        <form className='d-flex flex-column gap-3 col-sm-8 col-lg-4 mx-auto p-3 p-sm-5 rounded-4 bgDark' onSubmit={handleSubmit}>
            <h3>Entre em contato conosco por E-mail:</h3>
            <label htmlFor="name">Seu Nome:</label>
            <input
                id="name"
                type="text"
                name="name"
            />
            <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
            />

            <label htmlFor="email">Seu Email:</label>
            <input
                id="email"
                type="email"
                name="email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />

            <label htmlFor="message">Sua Mensagem:</label>
            <textarea
                id="message"
                name="message"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />

            <button className='col-lg-5 btn' type="submit" disabled={state.submitting}>
                Enviar Mensagem
            </button>
        </form>
    );
}

export default ContactForm;
