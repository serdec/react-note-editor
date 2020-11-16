import React from 'react';
import { string, func, number } from 'prop-types';
import styles from './textarea.module.scss';

const noop = () => {};
const TextArea = ({ textValue = '', editNote = noop, selectedNoteId }) => {
  return (
    <div className={styles.textarea}>
      <textarea
        className={styles.textarea__textContainer}
        value={textValue}
        onChange={(e) => {
          const text = e.target.value;
          const title = text.split(' ').slice(0, 5).join(' ');
          editNote({ id: selectedNoteId, title, text });
        }}
      />
    </div>
  );
};
TextArea.propTypes = {
  textValue: string,
  editNote: func,
  selectedNoteId: number,
};
export default TextArea;
