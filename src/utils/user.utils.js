import { sessionUtils, viewUtils } from "./";
import aayushKafle from "../assets/img/aayush_kafle.jpg";
import pratikSapkota from '../assets/img/pratik_sapkota.jpg'
import pramishPaudel from '../assets/img/pramish_paudel.jpg'
import sumanMagar from '../assets/img/suman_magar.jpg'
import kushalDhakal from '../assets/img/kushal_dhakal.jpg';
import prajwalKumarAle from '../assets/img/prajwal_kumar_ale.jpg'
import aayushPoudel from '../assets/img/aayush_poudel.jpg';
import kunjung from '../assets/img/kunjung_sherpa.jpg';
import rajshree from '../assets/img/raj_shree.jpg';
import utsav_maskey from '../assets/img/utsav_maskey.jpg'
import shiv_shankar_sah from '../assets/img/shiv_shankar_sah.jpg'
import jeevan_thapa from '../assets/img/jeevan_thapa.jpg'
import anish_bhusal from '../assets/img/anish_bhusal.jpg'

import mike from "../assets/img/logo-small.png";

function getLoggedInUsername() {
  const session = sessionUtils.getJsonStorageComponent("session");
  if (session !== undefined && !viewUtils.isEmptyObject(session)) {
    return session.data.user;
  } else {
    return "";
  }
}

function getUserIcon(teamName) {
  if (teamName === "aayush_kafle") {
    return aayushKafle;
  } 
  else if(teamName === 'pratik_sapkota'){
    return pratikSapkota;
  }
  else if(teamName === 'pramish_paudel'){
      return pramishPaudel
  }
  else if(teamName === 'suman_magar'){
      return sumanMagar
  }
  else if(teamName === 'kushal_dhakal'){
      return kushalDhakal
  }
  else if(teamName === 'prajwal_kumar_ale'){
      return prajwalKumarAle
  }
  else if(teamName === 'aayush_poudel'){
      return aayushPoudel
  }
  else if(teamName === 'kunjung_sherpa'){
      return kunjung
  }
  else if(teamName === 'rajshree_rai'){
      return rajshree
  }
  else if(teamName === 'utsav_maskey'){
      return utsav_maskey
  }
  else if(teamName === 'anish_bhusal'){
      return anish_bhusal
  }
  else if(teamName === 'jeevan_thapa'){
      return jeevan_thapa
  }
  else if(teamName === 'shiv_shankar_sah'){
      return shiv_shankar_sah
  }
  else {
    return mike;
  }
}

export const userUtils = { getLoggedInUsername, getUserIcon };
