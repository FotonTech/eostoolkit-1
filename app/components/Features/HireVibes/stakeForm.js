/**
 *
 * HireVibes StakeForm
 *
 */

import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Redo from '@material-ui/icons/Redo';

import ToolBody from 'components/Tool/ToolBody';
import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

import messages from './messages';
import commonMessages from '../../messages';

const FormObject = props => {
  const { handleSubmit, intl } = props;
  const FormData = [
    {
      id: 'owner',
      label: intl.formatMessage(commonMessages.formAccountLabel),
      placeholder: intl.formatMessage(messages.hireVibesAccountProvideStakePlaceholder),
      lg: 12,
    },
    {
      id: 'quantity',
      label: intl.formatMessage(messages.hireVibesQuantityLabel),
      placeholder: intl.formatMessage(messages.hireVibesQuantityPlaceholder),
      lg: 12,
    },
  ];
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: intl.formatMessage(messages.hireVibesStakeFormSubmitText),
  };
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
      account: 'hirevibeshvt',
      name: 'transfer',
      data: {
        from: `${owner}`,
        quantity: `${Number(quantity)
          .toFixed(4)
          .toString()} HVT`,
        to: 'hvtstakingio',
        memo: 'staking hvt'
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
      icon={Redo}
      header={intl.formatMessage(messages.hireVibesStakeFormHeader)}
      subheader={intl.formatMessage(messages.hireVibesStakeFormSubHeader)}>
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
          .positive(intl.formatMessage(messages.hireVibesFormPositiveQuantityRequired)),
      });
    },
  })
);

export default enhance(StakeForm);
