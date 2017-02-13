import React, { Component } from 'react'

import Navbar from './Navbar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
        <div className="clear-navbar"></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tu autem negas fortem esse quemquam posse, qui dolorem malum putet. Cur id non ita fit? His enim rebus detractis negat se reperire in asotorum vita quod reprehendat. Quod ea non occurrentia fingunt, vincunt Aristonem; Equidem etiam Epicurum, in physicis quidem, Democriteum puto. Idemque diviserunt naturam hominis in animum et corpus. Duo Reges: constructio interrete. Quamquam te quidem video minime esse deterritum. Huius ego nunc auctoritatem sequens idem faciam. Ergo ita: non posse honeste vivi, nisi honeste vivatur? </p>

<p>Quid enim me prohiberet Epicureum esse, si probarem, quae ille diceret? Traditur, inquit, ab Epicuro ratio neglegendi doloris. Tum Torquatus: Prorsus, inquit, assentior; Maximus dolor, inquit, brevis est. Sed id ne cogitari quidem potest quale sit, ut non repugnet ipsum sibi. </p>

<p>Si autem id non concedatur, non continuo vita beata tollitur. Cur fortior sit, si illud, quod tute concedis, asperum et vix ferendum putabit? At ille pellit, qui permulcet sensum voluptate. Nam illud vehementer repugnat, eundem beatum esse et multis malis oppressum. Et quidem Arcesilas tuus, etsi fuit in disserendo pertinacior, tamen noster fuit; Mihi enim satis est, ipsis non satis. Eam si varietatem diceres, intellegerem, ut etiam non dicente te intellego; Sed haec quidem liberius ab eo dicuntur et saepius. </p>

<p>Ut aliquid scire se gaudeant? Suo enim quisque studio maxime ducitur. Hoc enim constituto in philosophia constituta sunt omnia. An dolor longissimus quisque miserrimus, voluptatem non optabiliorem diuturnitas facit? Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Illa tamen simplicia, vestra versuta. Quae in controversiam veniunt, de iis, si placet, disseramus. </p>

<p>Sed venio ad inconstantiae crimen, ne saepius dicas me aberrare; Haeret in salebra. Quae autem natura suae primae institutionis oblita est? Haec bene dicuntur, nec ego repugno, sed inter sese ipsa pugnant. Hic ambiguo ludimur. Age nunc isti doceant, vel tu potius quis enim ista melius? Itaque hic ipse iam pridem est reiectus; </p>
      </div>
    );
  }
}
