import React from 'react';
import { Typography } from 'antd';
import take_notes from '../pics/take_notes.jpg';

const { Title, Paragraph } = Typography;

const data = [
  `In Fall of 2018, Bhargav Bhatt gave <a href="http://www-personal.umich.edu/~bhattb/teaching/prismatic-columbia/">Eilenberg Lectures Series</a>. On his website, one can already find complete notes. Just for my own record, I put my <a href="http://shizhang.li/scanned/prismatic%20cohomology.pdf"><font size="3">notes</font></a> here.`,
  `In Fall of 2018, Chao Li taught a <a href="http://www.math.columbia.edu/~chaoli/TopicF2018.html">topic course on Number Theory</a> about arithmetic of L-functions. There are complete notes <a href="http://www.math.columbia.edu/~phlee/CourseNotes/L-functions.pdf">here</a> and <a href="https://www.dropbox.com/s/rpuzrg2yj2m3ala/arithL.pdf">there</a>. Here is my <a href="http://shizhang.li/scanned/arithmetic%20of%20L.pdf"><font size="3">notes</font></a>.`,
  `I gave a <a href="http://www.math.columbia.edu/~dejong/seminar.html">talk</a> on weakly-&eacute;tale versus pro-&eacute;tale topology based on the second section of <a href="https://arxiv.org/pdf/1309.1198.pdf">Bhatt--Scholze</a> and Tag <a href="https://stacks.math.columbia.edu/tag/092A">092A</a>. Here is my (completely unreadable) <a href="http://shizhang.li/scanned/wet%20vs%20proet.pdf"><font size="3">notes</font></a>.`,
  `<a href="http://shizhang.li/scanned/BKF.pdf"><font size="3">Notes</font></a> on Breuil--Kisin--Fargues modules given by myself at the <a href="http://math.columbia.edu/~rcheng/BMS-S2018.html">seminar on integral p-adic Hodge theory</a>.`,
  `In Spring of 2018, Johan gave a series of lectures in <a href="http://math.columbia.edu/~dejong/seminar.html">his seminar on local cohomology</a>. Here is my <a href="http://shizhang.li/scanned/local%20cohomology.pdf"><font size="3">notes</font></a>.`,
  `Here are some <a href="http://shizhang.li/scanned/notes%20on%20crystalline%20taught%20by%20Xuanyu.pdf"><font size="3">notes</font></a> on crystalline taught by Xuanyu, not readable I guess. 
  <br />Here is a <a href="http://shizhang.li/scanned/lecture%20notes%20on%20crystalline%20by%20myself.pdf"><font size="3">lecture notes</font></a> on crystalline given by myself at the <a href="http://math.columbia.edu/~brianrl/crys_seminar.html">seminar on crystalline cohomology</a> which is perhaps more readable. It becomes messy towarding the end.`,
  `<a href="http://shizhang.li/scanned/Iwasawa.pdf"><font size="3">Notes</font></a> on Iwasawa theory, taught by Sam in the student Number Theory seminar of Fall 2017.`,
  `<a href="http://shizhang.li/scanned/direct%20summand%20conjecture.pdf">(partial) <font size="3">Notes</font></a> taken from Johan&rsquo;s student algebraic geometry <a href="http://math.columbia.edu/~dejong/seminar/seminar-DSC-Yves-Andre.html">seminar on direct summand conjecture</a> in the Spring of 2017.`,
  `<a href="http://shizhang.li/scanned/BBD.pdf"><font size="3">Notes</font></a> of the <a href="http://www.math.columbia.edu/~clian/aglss17.html">seminar on BBD(G)</a> organized by <a href="http://www.math.columbia.edu/~clian/">Carl Lian</a> and myself.`,
  `In Spring of 2017, Michael Harris taught a course on trace formula. Meanwhile <a href="http://www.math.columbia.edu/~phlee/">Pak-Hin Lee</a>, <a href="http://www.math.columbia.edu/~mundy/">Samuel Mundy</a> and I organized a <a href="http://www.math.columbia.edu/~phlee/S17-Langlands/index.html">seminar on Langlands'ish</a>.
  <br />Here's my (very unreliable) <a href="http://shizhang.li/scanned/langlandish.pdf"><font size="3">notes</font></a> of them.
  <br />(FBI) Warning: most of the notes above was taken by me in the status of "Where am I? What am I doing?", I wouldn't be surprised if some experts come to me and say every word there is wrong (except the part regarding Drinfel'd modules (maybe?!)). So if I were you, I wouldn't even bother clicking the link!`,
  `In Fall of 2016, David Hansen taught a course on p-adic Hodge theory.
  <br />The first half of this course was on Scholze's p-adic comparison for smooth proper rigid spaces. Notes coming (not that) soon.
  <br />The second half of this course was on diamonds (which have ACTUAL value), here's my <a href="http://shizhang.li/scanned/diamond.pdf"><font size="3">notes</font></a>.`,
  `In Fall of 2016, Daniel Halpern-Leistner taught a <a href="http://www.math.columbia.edu/~danhl/2016F.html">course</a> on GIT. Here are the <a href="http://shizhang.li/scanned/GIT.pdf"><font size="3">notes</font></a> I took.`,
  `<a href="http://shizhang.li/scanned/stable%20rationality.pdf"><font size="3">Notes</font></a> taken from Johan&rsquo;s student algebraic geometry <a href="http://math.columbia.edu/~dejong/seminar/seminar-anand.html">seminar on stable rationality</a> in the Spring of 2016.`,
  `<a href="http://shizhang.li/scanned/FGA.pdf"><font size="3">Notes</font></a> on FGA explained, taken at the learning <a href="http://math.columbia.edu/~rdobben/FGA/">Reminar</a> in the Spring of 2016.`,
  ` <a href="http://shizhang.li/scanned/tates%20thesis.pdf"><font size="3">Notes</font></a> on Tate&rsquo;s thesis, taught by Sam in the Spring of 2016.`,
  `In Fall of 2015, Johan taught a <a href="http://math.columbia.edu/~dejong/courses/schemes-fall-2015.html">course on &eacute;tale fundamental group</a>. Here's my <a href="http://shizhang.li/scanned/fundamental%20group.pdf"><font size="3">notes</font></a> of it.`,
  `<a href="http://shizhang.li/scanned/etale%20cohomology.pdf"><font size="3">Notes</font></a> on &eacute;tale cohomology, taken at the learning <a href="http://math.columbia.edu/~rdobben/%C3%89tale/">Reminar</a> in the Fall of 2015.`
];

export default function Scanned() {
  return (
    <div>
      <div className="img_text-wrapper">
        <div>
          <img src={take_notes} alt="take notes" width="250px" />
        </div>
        <Typography className="component-text">
          <Title>Shizhang Li</Title>
          <Paragraph><i>“Outside of a dog, a book is a man’s best friend. Inside of a dog, it’s too dark to read.”</i> -- Groucho Marx</Paragraph>
        </Typography>
      </div>
      <div className="title-details">
        <Typography>
          <Title>Scanned Notes</Title>
          <Title level={4}>These are hand-written notes taken on various occasions that I felt too lazy to LaTeXify.
By clicking the links below, you solemnly swear not to laugh at my hand-writing.</Title>
          {data.map(ele => <Paragraph><div dangerouslySetInnerHTML={{ __html: "&bull;&nbsp;" + ele }} /></Paragraph>)}
        </Typography>
      </div>
    </div>
  )
}
