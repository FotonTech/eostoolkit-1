/**
 *
 * Parsl StakeForm
 *
 */

import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Undo from '@material-ui/icons/Undo';

import ToolBody from 'components/Tool/ToolBody';
import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

import messages from './messages';
import commonMessages from '../../messages';

const FormObject = props => {
  const { handleSubmit, intl } = props;
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: intl.formatMessage(messages.boidUnstakeFormSubmitText),
  };
  const FormData = [
    {
      id: 'owner',
      label: intl.formatMessage(commonMessages.formAccountLabel),
      placeholder: intl.formatMessage(messages.boidAccountProvideStakePlaceholder),
      lg: 12,
    },
    {
      id: 'quantity',
      label: intl.formatMessage(messages.boidQuantityLabel),
      placeholder: intl.formatMessage(messages.boidQuantityPlaceholder),
      lg: 12,
    },
  ];
  return (
    <ToolForm {...formProps}>
      {FormData.map(form => {
        return <ToolInput key={form.id} {...form} {...props} />;
      })}
    </ToolForm>
  );
};

const makeTransaction = values => {
  const { quantity, owner } = values;
  const transaction = [
    {
      account: 'boidcomtoken',
      name: 'unstake',
      data: {
        _stake_account: `${owner}`,
        quantity: `${Number(quantity)
          .toFixed(4)
          .toString()} BOID`,
      },
    },
  ];
  return transaction;
};

const StakeForm = props => {
  const { intl } = props;
  return (
    <ToolBody
      color="warning"
      icon={Undo}
      header={intl.formatMessage(messages.boidUnstakeFormHeader)}
      subheader={intl.formatMessage(messages.boidUnstakeFormSubHeader)}>
      <FormObject {...props} />
    </ToolBody>
  );
};

const enhance = compose(
  withFormik({
    handleSubmit: (values, { props, setSubmitting }) => {
      const { pushTransaction } = props;
      const transaction = makeTransaction(values);
      setSubmitting(false);
      pushTransaction(transaction, props.history);
    },
    mapPropsToValues: props => ({
      owner: props.networkIdentity ? props.networkIdentity.name : '',
      quantity: '',
    }),
    validationSchema: props => {
      const { intl } = props;
      return Yup.object().shape({
        owner: Yup.string().required(intl.formatMessage(commonMessages.formAccountRequired)),
        quantity: Yup.number()
          .required(intl.formatMessage(commonMessages.formQuantityRequired))
          .positive(intl.formatMessage(messages.boidFormPositiveQuantityRequired)),
      });
    },
  })
);

export default enhance(StakeForm);
