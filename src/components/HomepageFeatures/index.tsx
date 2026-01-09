import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AI-Native Automation',
    Svg: require('@site/static/img/undraw_thought-process_ze2r.svg').default,
    description: (
      <>
        Seamlessly integrate AI agents into your business processes. Let AI make
        decisions, execute tasks, and collaborate with humans to adapt workflows in real-time.
      </>
    ),
  },
  {
    title: 'Distributed & Event-Driven',
    Svg: require('@site/static/img/undraw_server-status_7viz.svg').default,
    description: (
      <>
        Built for scale with an event-driven architecture. Decoupled nodes
        communicate via message queues (AMQP) to ensure resilience, high performance
        and fault tolerance.
      </>
    ),
  },
  {
    title: 'Traceable & Auditable',
    Svg: require('@site/static/img/undraw_customer-survey_ek29.svg').default,
    description: (
      <>
        Gain full visibility into every step. Track execution history, audit
        decisions, and monitor performance in real-time to ensure compliance and
        optimization.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
