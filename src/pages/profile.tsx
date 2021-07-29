import { useEffect } from 'react'
import RepositoryItem from 'components/RepositoryItem';

import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from 'store'
import { Repository } from 'store/ducks/repositories/types';
import * as RepositoriesActions from 'store/ducks/repositories/actions';

import PersonImage from 'assets/profile.png';
import 'styles/profile.scss'

interface StateProps {
  repositories: Repository[]
}

interface DispatchProps {
  loadRequest(): void
  loadSuccess(data: Repository[]): void
  loadFailure(): void
}

type Props = StateProps & DispatchProps

function Profile(props: Props) {

  useEffect(() => {
    const { loadRequest } = props;
    loadRequest();
  }, []);


  const { repositories } = props;

  return (
    <div id="page-profile">
      <aside>
        <img src={PersonImage} alt="Matheus Fugisaki" />
        <div className="profile-info" style={{ width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <strong>Matheus Fugisaki</strong>
            <div className="social-media-mobile">
              <a href="https://github.com/fugisakimatheus" target="_blank">
                <AiFillGithub size="22px" />
              </a>

              <a href="https://www.instagram.com/matheusfugisaki/" target="_blank">
                <AiFillInstagram size="22px" />
              </a>

              <a href="https://www.linkedin.com/in/matheus-fugisaki/" target="_blank">
                <AiFillLinkedin size="22px" />
              </a>
            </div>
          </div>
          <p>Front-end developer</p>
          <section className="skills-list">
            <strong>Skills</strong>
            <ul>
              <li>Javascript / Typescript</li>
              <li>React.js / React Native - Redux</li>
              <li>Vue.js - Vuex</li>
              <li>Electron</li>
              <li>CSS / SASS / Stylus</li>
            </ul>
          </section>
        </div>

        <footer className="social-media">
          <strong>Social Media:</strong>
          <a href="https://github.com/fugisakimatheus" target="_blank">
            <AiFillGithub size="20px" />
          </a>

          <a href="https://www.instagram.com/matheusfugisaki/" target="_blank">
            <AiFillInstagram size="20px" />
          </a>

          <a href="https://www.linkedin.com/in/matheus-fugisaki/" target="_blank">
            <AiFillLinkedin size="20px" />
          </a>
        </footer>
      </aside>

      <main className="main-content">
        <section className="skills-list-mobile">
          <strong>Skills</strong>
          <div className="skills-content">
            <span>Javascript / Typescript</span>
            <span>React.js / React Native - Redux</span>
            <span>Vue.js - Vuex</span>
            <span>Electron</span>
            <span>CSS / SASS / Stylus</span>
          </div>
        </section>
        <strong className="title">Repositories</strong>
        <div className="items-list">
          {repositories.map(repository => <RepositoryItem key={repository.id} repository={repository} />)}
        </div>
      </main>

      <footer className="profile-footer">&copy; Matheus Fugisaki - 2021</footer>
    </div>
  )
}

const mapStateToProps = ({ repositories }: ApplicationState) => ({
  repositories: repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
