import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import ReactHtmlParser from 'react-html-parser';
import striptags from 'striptags';

import styles from './Work.module.scss';
import {Page, Grid, Text, List, Link, Button, Scroll} from '../../components';
import {nodeFromEdges} from '../../components/utils';

import placeholder from '../../images/placeholder.jpg';

interface Props {
  data: any;
}

type State = {};
type ComposedProps = Props;

const Project = ({slug, title, excerpt, tags, featuredMedia}) => {
  const featuredImage = featuredMedia ? featuredMedia.source_url : placeholder;

  return (
    <div className={styles.Project}>
      <div className={styles.ProjectImageContainer}>
        <Scroll>
          <Scroll.LoadAnimation propogateAnimation>
            <img src={featuredImage} className={styles.ProjectImage} />
          </Scroll.LoadAnimation>
        </Scroll>
      </div>
      <div className={styles.ProjectContentContainer}>
        <div className={styles.ProjectContent}>
          <Text tag="h2" uppercase>
            {ReactHtmlParser(title)}
          </Text>
          <List unstyled>
            {tags.map((tag, key) => (
              <List.Item key={key}>
                <div className={styles.Tag}>
                  <Text tag="h5" size="subscript" uppercase>
                    {tag.name}
                  </Text>
                </div>
              </List.Item>
            ))}
          </List>
          <Text hyphenated>{striptags(excerpt)}</Text>
          <Link to={`/work/${slug}`}>
            <Button value="View Case Study" />
          </Link>
        </div>
      </div>
    </div>
  );
};

class Work extends React.PureComponent<ComposedProps, State> {
  state: State = {};
  constructor(props) {
    super(props);
  }

  render() {
    const {data} = this.props;
    const projects = nodeFromEdges(data.allWordpressWpProject.edges);

    return (
      <Page
        title="Web Design and Development"
        description="Description"
        keywords={['keyword', 'things']}
      >
        <Page.Background />
        <Page.Layout>
          <Grid>
            <Grid.ScreenWidth>
              <div className={styles.ProjectsContainer}>
                {projects.map((project, key) => (
                  <Project
                    title={project.title}
                    slug={project.slug}
                    tags={project.tags}
                    excerpt={project.excerpt}
                    key={key}
                    featuredMedia={project.featured_media}
                  />
                ))}
              </div>
            </Grid.ScreenWidth>
          </Grid>
        </Page.Layout>
      </Page>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpProject(sort: {fields: [date], order: DESC}) {
          edges {
            node {
              slug
              title
              excerpt
              tags {
                id
                name
              }
              featured_media {
                source_url
              }
            }
          }
        }
      }
    `}
    render={(data) => <Work data={data} />}
  />
);
