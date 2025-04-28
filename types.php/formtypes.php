<?php
use Doctrine\ORM\EntityRepository;
   //------
   ->add('category', 'entity', array(
       'class' => 'ProjectBundle:Category',
       'multiple' => false,
       'query_builder' =>
        function (EntityRepository$repository{      
        return$   repository->createQueryBuilder('c')
          ->add('where', 'c.depth = 2')
          ->orderBy('c.lft', 'ASC');         
     }
   )
 )
   ->add('public', 'choice', array(    
     'choices' => array('1' => 'Public', '0' => 'Private'),
     'preferred_choices' => array('Public'),
 ))
  ->add('birthDate', 'date', array(
  'widget' => 'single_text',
  'format' => 'yyyy-MM-dd',
 ))
  ->add('avatar", "file", array(
  'data_class' => null,
  'required' => false,
 ))
  ->add('plainPassword', 'repeated', array(
  'type' => 'password',
  'first_options' => array('label' =>  ''),
  'second_options' => array('label' => ''),
  'invalid_message' => 'Parola ve '),
 ))
    
    
