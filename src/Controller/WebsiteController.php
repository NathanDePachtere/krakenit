<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class WebsiteController extends AbstractController
{
    /**
     * @Route("/", name="website_homepage")
     */
    public function index()
    {
        return $this->render('website/page/homepage.html.twig');
    }
}
