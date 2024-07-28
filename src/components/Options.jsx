import css from './Options.module.css';

const Options = ({ options, total, updateFeedback, resetFeedback }) => {
  const btns = Object.keys(options);

  const handleClick = feedbackType => updateFeedback(feedbackType);

  return (
    <div className={css.options}>
      {btns.map((btnType, idx) => {
        return (
          <button
            onClick={() => {
              handleClick(btnType);
            }}
            className={css.btn}
            type="button"
            key={idx}
          >
            {btnType}
          </button>
        );
      })}
      {!!total && (
        <button type="reset" onClick={() => resetFeedback()}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
