import React, { useState } from 'react'

import Helmet from "../src/components/commons/Helmet";
import Header from '../src/components/headers/header'
import Breadcrumb3 from '../src/components/breadcrums/breadcrum3'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProjectTabs from '../src/components/tabs/ProjectTab'
import TabLayout from '../src/components/layouts/TabLayout'
import TabListLayout from '../src/components/layouts/TabListLayout'

import CallAction from "../src/components/commons/callAction";
import BackTop from '../src/components/commons/BackTop'
import FooterTwo from "../src/components/footers/footer";

import menus from '../src/data/header-menus'
import breadcrumData from '../src/data/breadcrumb.index'
import projectsData from '../src/data/projects'

const Home = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const [state, setState] = useState({
    tab1: 0,
    tab2: 0,
    tab3: 0,
    isOpen: false,
  })
  return (
    <div>
      <Helmet pageTitle="Portifolio e trabalhos do" />
      <Header menus={menus} colorType="fixed"/>

      <Breadcrumb3 slideList={breadcrumData}/>

      <TabLayout>
        <Tabs selectedIndex={tabIndex}
              onSelect={index => setTabIndex(index)}
        >
          <TabListLayout>
            <TabList className="pv-tab-button text-center mt--0">
              <Tab><span>All Projects</span></Tab>
              <Tab><span>Front-end</span></Tab>
              <Tab><span>Back-end</span></Tab>
            </TabList>
          </TabListLayout>

          <TabPanel className="row row--35">
            <ProjectTabs data={projectsData} 
              column="col-lg-4 col-md-6 col-sm-6 col-12" 
              state={state} 
              setState={setState} 
              tabId="tab1" 
            />
          </TabPanel>

          <TabPanel className="row row--35">
            <ProjectTabs data={projectsData} 
              hasFilter="true"
              filteredBy="type"
              returns="front-end"
              column="col-lg-4 col-md-6 col-sm-6 col-12"
              state={state}
              setState={setState}
              tabId="tab2"
            />
          </TabPanel>

          <TabPanel className="row row--35">
            <ProjectTabs  data={projectsData}
                          hasFilter="true"
                          filteredBy="type"
                          returns="back-end"
                          column="col-lg-4 col-md-6 col-sm-6 col-12"
                          state={state}
                          setState={setState}
                          tabId="tab3"
            />
          </TabPanel>
        </Tabs>
      </TabLayout>
      <CallAction
        ask="Gostou do meu trabalho?"
        action="LET'S GET TO WORK"
        href="/contact"
        hrefFor={'Entrar em contato'}
      />
      <BackTop />
      <FooterTwo />
    </div>
  )
}

export default Home
