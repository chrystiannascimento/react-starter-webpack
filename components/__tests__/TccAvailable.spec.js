import {render} from '@testing-library/react';
import TccAvailable from '../TccAvailable';

describe('TccAvailable', () => {
  it('Renders with a timestart and timeend', () => {
    const timestart = '01/10/2021';
    const timeend = '30/04/2022';
    const {container} = render(
      <TccAvailable timestart={timestart} timeend={timeend} />,
    );
    expect(container.firstChild).toHaveClass('available');
  });
  it('Renders with a timestart and timeend', () => {
    const timestart = '01/10/2021';
    const timeend = '30/03/2022';
    const {container} = render(
      <TccAvailable timestart={timestart} timeend={timeend} />,
    );
    expect(container.firstChild).toHaveClass('unavailable');
  });
  it('Renders with a timestart and timeend', () => {
    const timestart = '25/04/2022';
    const timeend = '30/04/2022';
    const {container} = render(
      <TccAvailable timestart={timestart} timeend={timeend} />,
    );
    expect(container.firstChild).toHaveClass('unavailable');
  });
});
