import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import ReactHtmlParser from 'react-html-parser';
import striptags from 'striptags';

import styles from './Work.module.scss';
import {Page, Grid, Text, List, Link} from '../../components';
import {nodeFromEdges} from '../../components/utils';

import placeholder from '../../images/placeholder.jpg';

interface Props {
  data: any;
}

type State = {};
type ComposedProps = Props;

const Project = ({slug, title, excerpt, tags}) => {
  return (
    <div className={styles.Project}>
      <img src={placeholder} />
      <h2 className={styles.ProjectTitle}>{ReactHtmlParser(title)}</h2>
      <Text>{striptags(excerpt)}</Text>
      <List>
        {tags.map((tag, key) => (
          <List.Item key={key}>{tag.name}</List.Item>
        ))}
      </List>
      <Link to={`/work/${slug}`} animated>
        Slug: {slug}
      </Link>
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
          <Page.Section>
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
                    />
                  ))}
                </div>
              </Grid.ScreenWidth>
            </Grid>
          </Page.Section>
        </Page.Layout>
      </Page>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpProject {
          edges {
            node {
              slug
              title
              excerpt
              tags {
                id
                name
              }
              acf {
                test_label_1
                test_label_2
              }
            }
          }
        }
        house: file(relativePath: {eq: "house.png"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 600) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={(data) => <Work data={data} />}
  />
);
