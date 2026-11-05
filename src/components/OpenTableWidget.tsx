import React from 'react';
import { OpenTableReservationSection } from './OpenTableReservationSection';

interface OpenTableWidgetProps {
  className?: string;
}

export const OpenTableWidget: React.FC<OpenTableWidgetProps> = ({
  className = '',
}) => {
  return <OpenTableReservationSection className={className} />;
};
