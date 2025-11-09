import React, { useEffect } from 'react';
import FormCardEvent from '../components/form-card-event';
import { useLocation } from 'react-router-dom';

export default function AddEvent({ onAddEvent }) {
  const location = useLocation();

  useEffect(() => {
      if (location.hash === '#add-event') {
        const element = document.getElementById('add-event');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } 
    }, [location]);


  return (
    <div id='add-event' className="min-h-screen bg-slate-900 py-20">
      <div className="container">
        <div className="mx-auto">
          <FormCardEvent onAddEvent={onAddEvent} />
        </div>
      </div>
    </div>
  );
}
