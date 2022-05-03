import StatusIndicatorStyled from './StatusIndicator.styles';

export interface StatusIndicatorProps {
  type: "Error" | "Warning" | "Success" | "Information" | "Active Process" | "Inactive Process";
}

const StatusIndicator: React.FC<StatusIndicatorProps> = (props) => {
  return (
    <StatusIndicatorStyled>
      {props.type}
    </StatusIndicatorStyled>
  );
};

export default StatusIndicator;
