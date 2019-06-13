import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { OptionType } from '../index';
import { PlaceholderProps } from '../lib/components/Placeholder';
function Placeholder(props: PlaceholderProps<OptionType>) {
  return (<Typography color="textSecondary" className={props.selectProps.classes.placeholder} {...props.innerProps}>
    {props.children}
  </Typography>);
}
Placeholder.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
} as any;
export { Placeholder };

