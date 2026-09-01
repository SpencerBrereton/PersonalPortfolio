import { useEffect, useState } from 'react';
import { formatHeader } from '../../utils/textUtils';
import './ContactModal.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isClosing, setIsClosing] = useState(false);

  // Lock scroll while open. The cleanup runs when the modal closes, which is
  // what starts the exit animation.
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
      setIsClosing(true);
    };
  }, [isOpen]);

  // Keep the modal mounted for the length of the CSS exit transition (0.4s).
  useEffect(() => {
    if (!isClosing) return;
    const timer = setTimeout(() => setIsClosing(false), 400);
    return () => clearTimeout(timer);
  }, [isClosing]);

  if (!isOpen && !isClosing) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just close and log
    console.log('Form submitted');
    alert('Thanks for reaching out! (Demo only)');
    onClose();
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        <div className="contact-header">
          <h2>{formatHeader("Get in Touch")}</h2>
          <p>Let's build something great together.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="What are we connecting about?"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
