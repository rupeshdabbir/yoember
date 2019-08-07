import { computed, observer } from '@ember/object';
import Controller from '@ember/controller';
import { match, not, and, or } from '@ember/object/computed';
import { gte } from '@ember/object/computed';




export default Controller.extend({
    emailAddress: '',
    message: '',
    // isValid: match('emailAddress', /^.+@.+\..+$/),
    isEmailValid: match('emailAddress', /^.+@.+\..+$/),
    // isEmailDisabled: not('isEmailValid'),
    isMessageEnoughLong: gte('message.length', 5),

    submitDisable: and('isEmailValid', 'isMessageEnoughLong'),
    isNotValid: not('submitDisable'),
    // submitDisable: not('isDisabled'),

    actions: {
        submitButton () {
            alert(`Saving of the following email address is in progress: ${this.isEmailValid}`);
        }
      }
});
