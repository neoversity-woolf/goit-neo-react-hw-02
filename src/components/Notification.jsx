import css from './Notification.module.css';

const Notification = () => {
  return (
    <div className={css.notification}>
      No feedback yet <span>🤷</span>
    </div>
  );
};

export default Notification;
