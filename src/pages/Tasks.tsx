import { FunctionComponent, useCallback } from "react";
import TopNavigation from "../components/TopNavigation";
import MenuItems1 from "../components/MenuItems1";
import { useNavigate } from "react-router-dom";
import styles from "./Tasks.module.css";

const Tasks: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <div className={styles.tasks}>
      <TopNavigation
        adminName="(Admin name)"
        logoTop="0"
        logoPosition="sticky"
        topNavigationAlignSelf="stretch"
        topNavigationLeft="unset"
        topNavigationWidth="unset"
      />
      <section className={styles.content}>
        <div className={styles.sideMenu}>
          <MenuItems1 />
          <div className={styles.logoutButtonContainer}>
            <div className={styles.logoutButton}>
              <img
                className={styles.logoutRoundedIcon}
                loading="lazy"
                alt=""
                src="/logout-rounded@2x.png"
              />
              <div
                className={styles.logOutWrapper}
                onClick={onFrameContainerClick}
              >
                <div className={styles.logOut}>Log out</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contentHeader}>
          <div className={styles.headerTitle}>
            <h1 className={styles.tasks1}>Tasks</h1>
            <div className={styles.contentBody}>
              <div className={styles.taskForm}>
                <div className={styles.imageContainer}>
                  <img
                    className={styles.youngWomanWritingInANotep}
                    loading="lazy"
                    alt=""
                    src="/young-woman-writing-in-a-notepad1@2x.png"
                  />
                </div>
                <form className={styles.formFields}>
                  <div className={styles.personalInfo}>
                    <div className={styles.nameFields}>
                      <div className={styles.nameFieldsChild} />
                      <div className={styles.firstNameField}>
                        <div className={styles.companyField}>
                          <div className={styles.companyLabel}>
                            <a className={styles.company}>Company</a>
                          </div>
                          <input className={styles.firstName} type="text" />
                        </div>
                        <div className={styles.lastNameField}>
                          <div className={styles.targetName}>Target Name</div>
                          <input className={styles.lastName} type="text" />
                        </div>
                      </div>
                      <div className={styles.emailField}>
                        <div className={styles.emailLabel}>
                          <div className={styles.email}>Target</div>
                        </div>
                        <input className={styles.email1} type="text" />
                      </div>
                      <div className={styles.expertDateField}>
                        <div className={styles.expertDateContainer}>
                          <div className={styles.assignedExpert}>
                            <div className={styles.expertLabel}>
                              <div className={styles.assignedExpert1}>
                                Assigned Expert
                              </div>
                            </div>
                            <input className={styles.department} type="text" />
                          </div>
                          <div className={styles.completionDate}>
                            <div className={styles.requiredCompletionDate}>
                              Required Completion Date
                            </div>
                            <div className={styles.dateSelector}>
                              <input
                                className={styles.dateInput}
                                placeholder="MM/DD/YY"
                                type="text"
                              />
                              <img
                                className={styles.calendarIcon}
                                alt=""
                                src="/calendar@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.additionalInfo}>
                          <div className={styles.dateRemarkPair}>
                            <div className={styles.assignedDate}>
                              Assigned Date
                            </div>
                            <div className={styles.dateRemarkFields}>
                              <div className={styles.dateRemarkFieldsChild} />
                              <input
                                className={styles.assignedDate1}
                                placeholder="MM/DD/YY"
                                type="text"
                              />
                              <img
                                className={styles.calendarIcon1}
                                alt=""
                                src="/calendar@2x.png"
                              />
                            </div>
                          </div>
                          <div className={styles.dateRemarkPair1}>
                            <div className={styles.remark}>Remark</div>
                            <input
                              className={styles.dateRemarkPairChild}
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.descriptionField}>
                        <div className={styles.descriptionLabel}>
                          <div className={styles.description}>Description</div>
                        </div>
                        <input className={styles.department1} type="text" />
                      </div>
                    </div>
                  </div>
                  <button className={styles.addTaskButton}>
                    <div className={styles.addTaskButtonChild} />
                    <div className={styles.addTask}>Add task</div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tasks;
