import * as React from 'react';

export default function() {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    refresh();
  }, []);

  const refresh = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(resp => resp.json())
      .then(newData => setData(newData));
  }

  return [data, refresh];
}