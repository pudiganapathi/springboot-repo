package com.boot.phani.budget.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.boot.phani.domain.Product;
import com.boot.phani.repositories.ProductRepository;

@Service("productService")
@Transactional
public class ProductServiceImpl implements ProductService {

	//@Autowired
	//private ProductRepository productRepository;

	public List<Product> findAllProducts() {
		//return productRepository.findAll();
		return null;
	}

	public Product findByName(String name) {
		//return productRepository.findByName(name);
		return null;
	}

	public Product findById(Long productId) {
		//return productRepository.findOne(productId);
		return null;
	}
}
