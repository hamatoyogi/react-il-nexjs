import Link from 'next/link';
export default () => (
  <div>
    <h1>Hello World. </h1>
    <ul>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/mobx-example">
          <a>mobx-example</a>
        </Link>
      </li>
      <li>
        <Link href="/sc-example">
          <a>Styled Components</a>
        </Link>
      </li>
    </ul>
  </div>
);
