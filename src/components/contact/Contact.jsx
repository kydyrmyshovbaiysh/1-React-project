import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { SiWhatsapp } from 'react-icons/si'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
	const form = useRef()

	const sendEmail = (e) => {
		e.preventDefault()

		emailjs.sendForm(
			'service_l2mivrr',
			'template_8rfx1sj',
			form.current,
			'hLEniW5Hlj4DeZ9jc',
		)
		e.target.reset()
	}
	return (
		<section id='contact'>
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className='container contact__container'>
				<div className='contact__options'>
					<article className='contact__option'>
						<MdOutlineEmail className='.contact__option-icon' />
						<h4>Email</h4>
						<h5>kydyrmyshuulub@gmail.com</h5>
						<a href='mailto:kydyrmyshuulub@gmail.com'>
							Send a message
						</a>
					</article>
					<article className='contact__option'>
						<RiMessengerLine className='.contact__option-icon' />
						<h4>Messenger</h4>
						<h5>egatortutorials</h5>
						<a href='https://facebook.com'>Send a message</a>
					</article>
					<article className='contact__option'>
						<SiWhatsapp className='.contact__option-icon' />
						<h4>WhatsApp</h4>
						<h5>Baiysh IT</h5>
						<a href='https://wa.me/message/T7WL6AHI2ABDK1'>
							Send a message
						</a>
					</article>
				</div>
				{/* END OF CONTACT OPTIONS */}
				<form ref={form} onSubmit={sendEmail}>
					<input
						type='text'
						name='name'
						placeholder='Your Full Name'
						required
					/>
					<input
						type='email'
						name='email'
						placeholder='Your Email'
						required
					/>
					<textarea
						name='message'
						rows='7'
						placeholder='Your Message'
						required
					></textarea>
					<button type='submit' className='btn btn-primary'>
						Send Message
					</button>
				</form>
			</div>
		</section>
	)
}
export default Contact
